$(function(){
    $("#movieForm").on("submit", function(evt){
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieData = {title, rating};
        const trAppend = createTr(movieData);
        $("#movieTbody").append(trAppend);
        $("#movieForm").trigger("reset");
    });
    $("#movieTbody").on("click", ".delete", function(evt){
        $(evt.target).closest("tr").remove();
    });
});

function createTr(data){
    return`
        <tr>
            <td>${data.title}</td>
            <td>${data.rating}</td>
            <td>
                <button class="delete">Delete</button>
            </td>
        </tr>
    `;
}