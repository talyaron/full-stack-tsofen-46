module.exports = [{
        name: 'Hamburger',
        price: 25,
        id: uid()
    },
    {
        name: 'Pizza',
        price: 15,
        id: uid()
    },
    {
        name: 'Maclobe',
        price: 40,
        id: uid()
    },
    {
        name: 'Rvioly',
        price: 15,
        id: uid()
    },
    {
        name: 'Cola',
        price: 15,
        id: uid()
    },
    {
        name: 'Ice lemonande',
        price: 15,
        id: uid()
    },
]

function uid() {

    return '_' + Math.random().toString(36).substr(2, 9);
};