const { connectDB } = require('./connectDB');
const indexRouter = require('./router');

exports.startup = async (app) => {
    await connectDB()
    app.use('/api', indexRouter);
}