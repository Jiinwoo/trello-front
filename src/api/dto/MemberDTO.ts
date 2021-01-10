export namespace MemberCreateDTO {
    export interface Req {
        email: string
        password: string
        username: string
    }

    export interface Res {
        email: string
        username: string
    }
}
