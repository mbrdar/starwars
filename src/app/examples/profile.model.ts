export class Profile {

  constructor(public firstName: string, public lastName: string) {
  }

  lastChanged() {
    return new Date();
  }
}
