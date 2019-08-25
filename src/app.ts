
// Object literal
// const myObj = {
//     myMethod() {
//         console.log(this)
//     }
// }

// function myFunction(...text: string[]) {
//     console.log(this, ...text)
// }

// myFunction.call('myObj')
// myFunction.call(myObj, 'ABC', 'DEF')
// myFunction.apply(myObj, ['ABC', 'DEF'])

// const bindFunction = myFunction.bind(myObj);
// bindFunction('ABC', 'DEF', 'GHI');
// bindFunction('CEF', 'DDEFEF', 'WED');

// class MyClass {
//     myMethod() {
//         const foo = 123;
//         console.log('1', this, foo)
//         setTimeout(() => {
//             console.log('2', this, foo);
//         });
//         setTimeout(function () {
//             console.log('3', this, foo);
//         });
//     }
// }

// const myInstance = new MyClass();

// myInstance.myMethod();

// const ele = document.querySelector('.click')

// function handleClick(this: HTMLAnchorElement, event: Event) {
//     event.preventDefault();
//     console.log(this.href);
// }

// ele.addEventListener('click', handleClick, false);

// const person = {
//     name: 'Todd',
//     age: 27
// }


// type Person = typeof person;

// type PersonKeys = keyof Person;
// type PersonTypes = Person[PersonKeys];

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// const personName = getProperty(person, 'name')
// console.log(personName)

// interface Person2 extends Person {

// }

// const anotherPerson: Person = {
//     age: 30,
//     name: 'John'
// }

// const anotherPerson2: Person2 = {
//     age: 30,
//     name: 'John'
// }

// console.log(person, anotherPerson)

// typeof [];

// interface Person { name: string, age: number }

// interface ReadOnlyPerson { readonly name: string, readonly age: number }

// const person: Person = {
//     name: '',
//     age: 0
// };

// type MyReadonly<T> = {
//     readonly [P in keyof T]: T[P]
// }
// function freeze<T>(obj: T): MyReadonly<T> {
//     return Object.freeze(obj);
// }

// const newPerson = freeze(person);

// interface Person { name: string, age: number }

// interface PartialPerson {
//     name?: string;
//     age?: number;
// }

// type MyPartial<T> = {
//     [P in keyof T]?: T[P]
// }

// function updatePerson(person: Person, prop: Partial<Person>) {
//     return { ...person, ...prop }
// }

// const person: Person = {
//     name: 'Todd',
//     age: 27
// };

// console.log(updatePerson(person, { name: 'James' }))

// interface Person { name: string, age: number }

// type MyRequired<T> = {
//     readonly [P in keyof T]-?: T[P];
// };

// function printAge(person: Required<Person>) {
//     return `${person.name} is ${person.age} years old.`
// }

// const person: Person = {
//     name: 'Todd',
//     age: 2
// };

// console.log(printAge(person));


// interface Person { name: string, age: number, address: {} }

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// const person: Pick<Person, 'name' | 'age'> = {
//     name: 'Todd',
//     age: 2
// };

// let dictionary: { [key: string]: TrackStates } = {};
// interface TrackStates {
//     current: string;
//     next: string
// }

// const item: Record<keyof TrackStates, string> = {
//     current: 'js02js95',
//     next: '8nlksjsk'
// }

// dictionary[0] = item;
// dictionary['something fancy'] = {
//     current: 'js02js95',
//     next: '8nlksjsk'
// } as Record<keyof TrackStates, string>;

// console.log(dictionary);

// class Song {
//     constructor(public title: string, public duration: string | number) { }

// }

// function getSongDuration(item: Song) {
//     const { duration } = item;
//     if (typeof duration === 'string') {
//         return duration;
//     }
//     const minutes = Math.floor(duration / 60000),
//         seconds = Math.ceil((duration / 1000) % 60);
//     return `${minutes < 12 ? '0' + minutes : minutes}:${seconds}`
// }

// const songDurationFromString = getSongDuration(
//     new Song('Wonderful wonderful', '05:31')
// )

// console.log(songDurationFromString);

// const songDurationFromStringMs = getSongDuration(
//     new Song('Wonderful wonderful', 330001)
// )
// console.log(songDurationFromStringMs);

// class Foo {
//     bar() { }
// }

// const bar = new Foo();

// console.log(bar instanceof Foo)
// console.log(Object.getPrototypeOf(bar) === Foo.prototype)

// const exists = 'localStorage' in window;

// console.log('localStorage', exists);

// console.log('WebAssembly' in window);

// class Song {
//     kind: 'song' = 'song';
//     constructor(public title: string, public duration: number) { }
// }

// class Playlist {
//     kind: 'playlist' = 'playlist';
//     constructor(public name: string, public songs: Song[]) { }
// }

// function isSong(item: any): item is Song {
//     return 'title' in item;
// }

// function getItemName(item: Song | Playlist) {
//     if (item.kind === 'song') {
//         return item.title;
//     }
//     return `${item.name}: ${item.songs}`
// }

// const songName = getItemName(new Song('Wonderful Wonderful', 300000))

// console.log('Song name:', songName);


// const playlistName = getItemName(
//     new Playlist('The Best Songs', [new Song('The man', 300000)])
// )

// console.log('Playlist name:', playlistName)

// interface Order {
//     id: string
//     amount: number
//     currency: string
// }

// interface Stripe {
//     type: 'stripe';
//     card: string;
//     cvc: string;
// }

// interface Paypal {
//     type: 'paypal';
//     email: string;
// }

// type CheckoutCard = Order & Stripe
// type CheckoutPayPal = Order & Paypal;

// const order: Order = {
//     id: 'xj28s',
//     amount: 100,
//     currency: 'USD'
// }

// const orderCard: CheckoutCard = {
//     ...order,
//     card: '1000 2000 3000 4000',
//     cvc: '123',
//     type: 'stripe'
// }

// const orderPaypal: CheckoutPayPal = {
//     ...order,
//     email: 'abc@def.gh',
//     type: 'paypal'
// }

// const assigned = Object.assign({}, order, orderPaypal)

// console.log(order)
// console.log(orderCard)
// console.log(orderPaypal);

// type Payload = CheckoutCard | CheckoutPayPal;

// function checkout(payload: Payload) {
//     if (payload.type === 'stripe') {
//         console.log(payload.card, payload.cvc);
//     }
//     if (payload.type === 'paypal') {
//         console.log(payload.email)
//     }
// }

// checkout(orderCard);
// checkout(orderPaypal);

// interface Item {
//     name: string;
// }
// interface Artist extends Item {
//     songs: number;
// }

// interface Artist {
//     getSongs: () => number;
// }

// const newArtist: Artist = { name: 'ABC', songs: 12, getSongs: () => newArtist.songs }

// type Artist2 = { name: string; } & Item;

// const artist: Artist = { name: '', songs: 12, getSongs() { return this.songs; } }

// console.log(artist, artist.getSongs(), newArtist, newArtist.getSongs())

interface IArtist {
    name: string;
}

class ArtistCreator implements IArtist {
    constructor(public name: string, public id?: number) { }
}

function artistFactory({ name }: IArtist) {
    return { id: 101, name };
}

function artistFactory2({ name }: ArtistCreator) {
    return new ArtistCreator(name);
}

console.log(artistFactory({ name: 'Todd' }));
console.log(artistFactory2({ name: 'John' }));