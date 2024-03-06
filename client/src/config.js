export const getUser = (currentUser,users)=>{
    return currentUser._id === users[0]._id?users[1]:users[0];
}

