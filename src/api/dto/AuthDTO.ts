export namespace AuthDTO {
    export interface Req {
        email: string
        password: string
    }
    export interface Res {
        token: string
    }
}
