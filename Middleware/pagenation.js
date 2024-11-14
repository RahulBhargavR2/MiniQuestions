export function pagenate(model){
    return async (req,res,next)=>{
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const order = parseInt(req.query.order) || 1
        const count = await model.countDocuments();

        const startIndex = (page-1)*limit;
        const ednIndex = page * limit;

        const results = {}
        if(startIndex>0){
            results.previous={
                page:page-1,
                limit:limit
            }
        }
        if(ednIndex < count){
            results.next = {
                page:page+1,
                limit:limit
            }
        }

        try{
            results.results = await model.aggregate([
                {
                    $sort:{difficulty:order}
                },
                {
                    $project:{_id:0}
                },
                {
                    $skip:startIndex
                },
                {
                    $limit:limit
                }
            ])
            res.pagenatedResults = results;
            next();
        }
        catch(error){
            return res.status(500).end(`error:${error.message}`)
        }
    }
}