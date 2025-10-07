module.exports = async function (context, myTimer) {
    const timeStamp = new Date().toISOString();
    context.log('Timer function ran!', timeStamp);
};
