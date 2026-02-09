import { createMovie } from "./src/movie.js";
import { createBooking } from "./src/booking.js";
import { createUser } from "./src/user.js";  

const movie1 = createMovie(1, "Bahubali", 300);
const movie2 = createMovie(2, "Chhaava", 500);
const user1 = createUser(1, "Lodu", "VIP");

const booking = createBooking(user1, [movie1, movie2]);