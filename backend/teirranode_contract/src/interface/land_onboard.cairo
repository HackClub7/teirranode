use starknet::ContractAddress;

// Data structure layout for the system

#[derive(Drop, Copy, Serde, starknet::Store)]
pub struct Land {
    pub land_id: u256,
    pub owner: ContractAddress,
    pub location: LandCoordinate,
    pub status: bool,
    pub title_no: felt252,
    pub registration_no: felt252,
    pub number_of_plots: u32,
    pub price_per_plot: u256,
    pub last_transaction_timestamp: u256,
}


#[derive(Drop, Copy, Serde, starknet::Store, PartialEq)]
pub struct LandCoordinate {
    pub latitude: felt252, // Latitude coordinate
    pub longitude: felt252, // Longitude coordinate
}

#[starknet::interface]
pub trait ILandOnboard<TContractState> {
    fn register_land(
        ref self: TContractState,
        landLocation: LandCoordinate,
        numberOfPlots: u32,
        titleDeed: felt252,
        registrationNumber: felt252,
        pricePerPlot: u256
    ) -> u256;

    fn get_lands(self: @TContractState) -> Array<Land>;
}
