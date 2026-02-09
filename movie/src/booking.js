export function createBooking(user, movies){
    let total=0;
    for(let movie of movies){
            total += movie.ticketPrice;
    }
    let discount=0;
    if(user.userType === "standard"){
        discount = 5;
    }
    if(user.userType === "VIP"){
        discount=12;
    }
    let discountAmt = (total*discount)/100;
    let final = total-discountAmt;

    return {
        userName: user.name,
        userType: user.userType,
        moviesBooked: movies.map(m => m.name),
        total,
        discount,
        final
    };
}