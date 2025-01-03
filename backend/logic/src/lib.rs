use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};
use calimero_sdk::serde::{Deserialize, Serialize};
use calimero_storage::collections::{UnorderedMap, Vector};
use calimero_sdk::{app, env};
use calimero_sdk::types::Error;

#[app::state(emits = Event)]
#[derive(Debug, PartialEq, PartialOrd, BorshSerialize, BorshDeserialize)]
#[borsh(crate = "calimero_sdk::borsh")]
pub struct AppState {
    lands: UnorderedMap<String, Land>, // Land ID -> Land
    owner_lands: UnorderedMap<String, Vector<String>>, // Owner -> List of Land IDs
}

#[derive(
    Clone, Debug, PartialEq, PartialOrd, BorshSerialize, BorshDeserialize, Serialize, Deserialize,
)]
#[borsh(crate = "calimero_sdk::borsh")]
#[serde(crate = "calimero_sdk::serde")]
pub struct Land {
    pub land_id: String,
    pub owner: String,
    pub location: String,
    pub status: bool,
    pub title_no: String,
    pub registration_no: String,
    pub number_of_plots: u32,
    pub price_per_plot: u128,
    // pub last_transaction_timestamp: u64,
}

#[app::event]
pub enum Event {
    LandRegistered { land_id: String },
    LandTransferred { land_id: String, new_owner: String },
}

#[app::logic]
impl AppState {
    #[app::init]
    pub fn init() -> AppState {
        AppState {
            lands: UnorderedMap::new(),
            owner_lands: UnorderedMap::new(),
        }
    }

    /// Generate a unique Land ID
    fn create_land_id(owner: &str, location: &str) -> String {
        use seahash::hash;
        let owner_hash = hash(owner.as_bytes());
        let location_hash = hash(location.as_bytes());
        format!("{:x}", owner_hash ^ location_hash)
    }

    /// Register a new land
    pub fn register_land(
        &mut self,
        owner: String,
        location: String,
        title_no: String,
        registration_no: String,
        number_of_plots: u32,
        price_per_plot: u128,
    ) -> Result<String, Error> {
        let land_id = Self::create_land_id(&owner, &location);

        // Check if the land already exists
        if self.lands.contains(&land_id)? {
            return Err(Error::msg("Land already registered"));
        }

        // Create a new land object
        let new_land = Land {
            land_id: land_id.clone(),
            owner: owner.clone(),
            location: location.clone(),
            status: true,
            title_no,
            registration_no,
            number_of_plots,
            price_per_plot,
            // last_transaction_timestamp: env::epoch_height(),
        };

        // Store the land
        self.lands.insert(land_id.clone(), new_land)?;

        // Update the owner's land list
        let mut owner_land_ids = self.owner_lands.get(&owner)?.unwrap_or_default();
        owner_land_ids.push(land_id.clone())?;
        self.owner_lands.insert(owner, owner_land_ids)?;

        // Emit an event
        env::emit(&Event::LandRegistered { land_id: land_id.clone() });

        Ok(land_id)
    }

    /// Get all lands for an owner
    pub fn get_lands_by_owner(&self, owner: String) -> Result<Vec<Land>, Error> {
        let owner_land_ids = self.owner_lands.get(&owner)?.unwrap_or_default();
        let mut lands = Vec::new();

        for land_id in owner_land_ids.entries()? {
            if let Some(land) = self.lands.get(&land_id)? {
                lands.push(land);
            }
        }

        Ok(lands)
    }
}
