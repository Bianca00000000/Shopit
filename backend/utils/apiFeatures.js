class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        // <=> req.query from getProducts()
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i' // case insensitive
            }
        } : {} // if that keyword does not exist in the database I do nothing => empty

        // console.log(keyword);
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {

        const queryCopy = { ...this.queryStr };

        // console.log(queryCopy);


        // Removing fields  from the query
        // we will filter by category, or price etc. (exists in our document), we do not have any field in 
        // our database called keyword or page or limit, 
        // these are only what the client wants to search for
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(el => delete queryCopy[el]);

        // console.log(queryCopy);

        // Advance filter for price, ratings etc.
        let queryStr = JSON.stringify(queryCopy)
        // When I'm looking for the price to be included between some values, I have to add the $ sign to greater|less than or equal => regex => else the mongo 
        // operator cannot recognize them without $ in front => else error in postman
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
        
        // console.log(queryCopy);
        // console.log(queryStr);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resPerPage) {
        // find the current page
        const currentPage = Number(this.queryStr.page) || 1; // if doesn't exists is 1
        const skip = resPerPage * (currentPage - 1); // next page

        this.query = this.query.limit(resPerPage).skip(skip); // limit for number of products result
        return this;
    }
}

module.exports = APIFeatures

// query = for example when I want to search for a Product with the command Product.find