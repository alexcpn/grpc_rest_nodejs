import { sayHello } from "./greet";

class Startup {
    public static main(): number {
        console.log(sayHello("Gulped TypeScript"));
        return 0;
    }
}

Startup.main();
