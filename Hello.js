//console.log("Hello world from Hello.js");
export default function HelloRoute(app) {
    app.get("/hello", (req, res) => {
        res.send('hello world! Life is good!');
    });
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    });
}
