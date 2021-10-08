import register from 'preact-custom-element';
import Greeting from "./Greeting";

register(Greeting, 'x-greeting', ['name'], { shadow: true });
