let initialState = {
    friends: [
        {
            id: 1,
            name: "Roman",
            imageURL: "https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        },
        {
            id: 2,
            name: "Demin",
            imageURL: "https://cdn.vox-cdn.com/thumbor/QggmlgpTq7ZCI-V9EPCDJzzuADc=/0x0:1205x798/1400x1400/filters:focal(513x122:743x352):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/55474493/Screen_Shot_2017_06_27_at_1.05.21_PM.0.png"
        },
        {
            id: 3,
            name: "Lerchick",
            imageURL: "https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=700&quality=85&auto=format&fit=max&s=3d74c30c02485d03b0166f4908ddaa35"
        }
    ]
};

const navbarReducer = (state = initialState, action) => {
    return state;
}
export default navbarReducer;