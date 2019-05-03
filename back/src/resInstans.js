module.exports = ({ list, total, msg = '', state = 200 }) => ({
    data: list,
    total: total || list.length || 0,
    state,
    msg
})