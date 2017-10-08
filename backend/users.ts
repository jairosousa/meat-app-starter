export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ){}

    macthes(another: User): boolean {
        return another !== undefined && 
        another.email === this.email && 
        another.password === this.password
    }

}

export const users: {[key: string]: User} = {
    "jaironsousa@gmail.com": new User('jaironsousa@gmail.com','Jairo','jnssls'),
    "jairofilho79@gmail.com": new User('jairofilho79@gmail.com','Jairo Filho','jnssls'),
    "caiosousa@gmail.com": new User('caiosousa@gmail.com','Caio','jnssls')
}