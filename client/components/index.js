/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'

export {default as Timer} from './Timer'
export {default as Board} from './board'
export {default as Controls} from './controls'
export {default as Color} from './color'
export {default as REACTO} from './reacto'
export {default as CustomEditor} from './customEditor'

export {Login, Signup} from './auth-form'
