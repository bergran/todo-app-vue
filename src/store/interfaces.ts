export default interface StoreDefinition {
    state: any;
    dispatch: (value: string, params: any) => void;
    commit: (value: string, params: any) => void;
}