const express = require('express');
const createError = require('http-errors')
const app = express();
const port = 1337;
const resize = require('./resize')

app.get('/:imageFile', (req, res) => {
    // Extract the query-parameter
    const widthString = req.query.w
    const heightString = req.query.h
    const format = req.query.f
    const imageFile = req.params.imageFile;

    // Parse to integer if possible
    let width = widthString ? parseInt(widthString) : null;
    let height = heightString ? parseInt(heightString) : null;
    

    // Set the content-type of the response
    res.type(`image/${format || 'png'}`)

    // Get the resized image
    resize(imageFile, format, width, height).pipe(res)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


