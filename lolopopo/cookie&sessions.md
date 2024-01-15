client pe cookie
aur server pe sessions

1. sessions m data jyda safe h qki user manupilation nhi kr pata easily
2. cookie wala data manupilation ho jata h kafi
   



# sessions 
    express-sessions install

    1. create
        req.sessionname.koibhinaam=koibhivalue
    2. read
        req.session.koibhinaam
    3. delete
        req.session.destroy



# cookie
    already install when we use express generator

    cookie setup
        res.cookie("name", value);
    cookie reading
        req.cookies.name
    cookie delete
        res.clearcookie("name")
