module.exports = {
    
    posts: [
        {
        id: "gtgtgtg",
        title:"Teste de Mural",
        description: "teste" 
        },
],
    getAll() {
        return this.posts;
    },
    newPost(title, description){

        this.posts.push({ id: generateID(), title, description});
    },
    deletePost(id){
        this.posts = this.posts.filter(tes => tes.id != id)
    }
    // deletePost(id){
    //     for(let p = 0; p < this.posts.length; p++) {
    //         if(this.posts[p].id == id){
    //             this.posts.splice(p, 1)
    //         }
    //     }
    // }

}
//-----gerar ID:
function generateID(){
    return Math.random().toString(36).substr(2,9);  //valor vai ter letras e numeros
}
//----deletar post


