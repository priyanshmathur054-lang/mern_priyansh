const StudentController={
    create (req,res){
      const body=req.body
      res.send({massage:"Success!New Record created.",
        reqBody:body
      });
    }, 
    readAll(req,res){
        res.send({massage:"success! Record Found."});
    },
    readOne(req,res){
        const params=req.params
        res.send({massage:"success! Student Detail Found.",
            params:params
        });
    },
    update(req,res){
        res.send({massage:"success! Update."});
    },
    destroy(req,res){
        res.send({massage:"success! Delete."});
    },
     
}
module.exports=StudentController