#[starknet::contract]
pub mod LandRegistryContract {
    use starknet::storage::StoragePointerReadAccess;
    use starknet::storage::StoragePointerWriteAccess;
    use starknet::storage::{Map, StorageMapWriteAccess, StorageMapReadAccess};
    use core::array::ArrayTrait;
    use starknet::{
        get_caller_address, get_contract_address, get_block_timestamp, ContractAddress, get_tx_info
    };
    use crate::interface::land_onboard::{ILandOnboard, Land, LandCoordinate};
    use core::poseidon::PoseidonTrait;
    use core::hash::{HashStateTrait, HashStateExTrait};


    pub fn create_land_id(caller: ContractAddress, location: LandCoordinate) -> u256 {
        let caller_hash = PoseidonTrait::new().update_with(caller).finalize();
        let location_hash = PoseidonTrait::new()
            .update_with(location.latitude + location.longitude)
            .finalize();

        let felt_land_id = caller_hash + location_hash;
        let land_id: u256 = felt_land_id.into();
        land_id
    }


    #[storage]
    struct Storage {
        tokenAddress: ContractAddress,
        nftAddress: ContractAddress,
        plotBasePrice: u256,
        lands: Map::<u256, Land>,
        land_transaction_tracking: Map::<u256, u256>,
        owner_lands: Map::<(ContractAddress, u256), u256>,
        land_count: u256,
        aggregate_owner_land: Map::<ContractAddress, u256>,
        all_lands: Map::<u256, Land>,
    }

    #[abi(embed_v0)]
    impl LandOnbaord of ILandOnboard<ContractState> {
        fn register_land(
            ref self: ContractState,
            landLocation: LandCoordinate,
            numberOfPlots: u32,
            titleDeed: felt252,
            registrationNumber: felt252,
            pricePerPlot: u256
        ) -> u256 {
            let caller_entity = get_caller_address();

            let land_id = create_land_id(caller_entity, landLocation);
            let tx_count = self.land_transaction_tracking.read(land_id);

            let new_land = Land {
                land_id,
                owner: caller_entity,
                location: landLocation,
                status: true,
                title_no: titleDeed,
                registration_no: registrationNumber,
                number_of_plots: numberOfPlots,
                price_per_plot: pricePerPlot,
                last_transaction_timestamp: tx_count
            };

            self.lands.write(land_id, new_land);
            self.land_count.write(self.land_count.read() + 1);

            let aggregate_owner_land = self.aggregate_owner_land.read(caller_entity);
            self.owner_lands.write((caller_entity, aggregate_owner_land), land_id);
            self.aggregate_owner_land.write(caller_entity, aggregate_owner_land + 1);

            self.all_lands.write(self.land_count.read(), new_land);

            land_id
        }

        fn get_lands(self: @ContractState) -> Array<Land> {
            let mut lands_array = ArrayTrait::new();

            let land_count = self.land_count.read();

            for i in 0..land_count {
                let land = self.all_lands.read(i);
                lands_array.append(land);
            };

            lands_array
        }
    }
}
