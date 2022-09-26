export default {
    getCuisines(state) {
        const cuisines = state.recipes.recipes.map(r => r.cuisine)

        let cuisinesUniqueId =
            cuisines.reduce((prev, cur) => prev.indexOf(cur.id) === -1 ? [...prev, cur.id] : prev, [])

        return cuisines.filter(c => {
            const idx = cuisinesUniqueId.indexOf(c.id)
            if (idx === -1) {
                return false
            }
            cuisinesUniqueId =
                cuisinesUniqueId.splice(0, idx).concat(cuisinesUniqueId.splice(idx + 1))
            return true
        })
    }
}