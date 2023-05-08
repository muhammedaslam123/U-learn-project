import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenvConfig from '../../dotenvConfig';
import { token } from 'morgan';


export const UserAuthService = ()=>{
    
    const EncriptPassword = async (Password:string)=>{
       const password = await bcrypt.hash(Password,10)
        return password

    }

    const CompairePassword = async (Password:string,EncriptPassword:string) =>{        
        const Status = await bcrypt.compare(Password,EncriptPassword)        
        return Status
    }

    const GenerateAccessToken = async (payload:string)=>{
        const token = await jwt.sign({payload},dotenvConfig.access_token_key,{expiresIn:'50s'})
        return token
    }

    const generateRefreshToken = async(payload : string )=>{
        console.log("user----------" , payload)
        const token = await jwt.sign({payload}, dotenvConfig.refresh_token_key , {expiresIn:"12w"})
        return token
    }

    const verifyRefreshToken = async (token:string)=>{
        console.log(token);
        
        const response = await jwt.verify(token,dotenvConfig.refresh_token_key)
        return response
    }

    const verifyAccessToken =async (token : string) => {
        return jwt.verify(token,dotenvConfig.access_token_key) 
     }

    return{
        EncriptPassword,
        CompairePassword,
        GenerateAccessToken,
        generateRefreshToken,
        verifyRefreshToken,
        verifyAccessToken
    }
}

export type typeOfUserAuthService = typeof UserAuthService