import axios from './index'
import { MemberCreateDTO } from './dto/MemberDTO'
import { AuthDTO } from './dto/AuthDTO'

export async function createMemberAPI(dto: MemberCreateDTO.Req) {
    return (await axios.post('/api/members', dto)).data
}
export async function authAPI(dto: AuthDTO.Req) {
    return (await axios.post('/auth', dto)).data
}
