import { env } from '$env/dynamic/public'
import Pocketbase from 'pocketbase'

export const pb = new Pocketbase(env.PUBLIC_DATBASE_URI)
