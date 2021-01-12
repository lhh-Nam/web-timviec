- Get comment by post: 
    + method : GET
    + url : http://localhost:5000/user/comment/allCommentByPost/{id} (post id) 


- User get profile: ( login ? call : redirect to login page )
    + method : GET 
    + url : http://localhost:5000/user/profile



- User post recruitment: (  send recruitment to Post of employer 
                            && login ? call : redirect to login page 
                            && user is employer ? can't send : can send recruitment
                            && 1 user just have 1 recruitment / 1 post )
    + method : POST
    + url : http://localhost:5000/user/postRecruitment
    + body : {
        post : ( id of Post)
        cv : file (pdf/word,...)
    }

    /* Task DONE */

- Get all Post: 
    + method : GET
    + url : http://localhost:5000/user/post/listPost

- Get all Category:
    + method : GET
    + url : http://localhost:5000/user/position/listCategory

- Get all Position:
    + method : GET
    + url : http://localhost:5000/user/position/listPosition


- Get all Location:
    + method : GET
    + url : http://localhost:5000/user/position/listLocation

- Get all Post ( Min to Max salary ) : 
    + method : GET
    + url : http://localhost:5000/user/post/listPostSortByMinSalary

- Get all Post ( Max to Min salary ) : 
    + method : GET
    + url : http://localhost:5000/user/post/listPostSortByMaxSalary

- Get all Post by Position:
    + method : GET
    + url : http://localhost:5000/user/post/listPostByPosition/ + idPosition (id of Position)
    + params : idPosition
    
- Get all Post by Category: 
    + method : GET
    + url : http://localhost:5000/user/post/listPostByCategory/ + idCategory (id of Category)
    + params : idCategory

- Get all Post by Location:
    + method: GET
    + url : http://localhost:5000/user/post/listPostByLocation/ + idLocation (id of Location) 
    + params : idLocation 


- User register: 
    + method : POST 
    + url : http://localhost:5000/user/register
    + body : {
        email : ( email input )
        password : ( password input )
        phone : ( phone input )
        name : ( name input )
        address : ( address input )
        userName : ( userName input )
        image : ( input file )
        isEmployer : true/false ( true for employer register page || false for user)
    }
    
- User login: 
    + method : POST 
    + url : http://localhost:5000/user/login
    + body : {
        userName : ( userName input )
        password : ( password input )
    }

    
- Employer Post: ( login && isEmployer ? call : redirect to login page )
    + mothod : POST
    + url : http://localhost:5000/user/employerPostRecruitment
    
        + body : {
            title: ( title input ),
            jobDescription: ( input jobDescription ),
            requirement: ( input requirement ),
            benefit: ( input benefit),
        
            duration: ( input date duration),
            quantity: ( input quantity ),

            category: ( chose on list category ( use select option tag )),
            position: ( chose on list position ( use select option tag )),
            location : ( chose on list location ( use select option tag )),
            
            maxSalary: ( input maxSalary > minSalary), 
            minSalary: ( input minSalary < maxSalary )
        }
