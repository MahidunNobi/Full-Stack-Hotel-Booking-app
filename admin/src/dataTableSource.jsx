export const UsersColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: "username",
    headerName: "User",
    width: 150,
    renderCell: (params)=>{     
      return (
        <div className="cellWithImg">
          <img 
          src={params.row.img || "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} 
          alt="user Img" 
          className="cellImg" 
          />
          <span> {params.row.username} </span>          
        </div>
      )
    }
  },
  {
    field: "email",
    headerName: "E-mail",
    width: 200
  },
  {
    field:"country",
    headerName: "Country",
    width: 100
  },
  {
    field:"city",
    headerName: "City",
    width: 100
  },
  {
    field:"mobile",
    headerName: "Mobile",
    width: 150
  }
];
export const HotelsColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params)=>{
      return (
        <div className="cellWithImg">
          <img 
          src={ params.row.photos && params.row.photos[0] ||"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} 
          alt="user Img" 
          className="cellImg" 
          />
          <span> {params.row.name} </span>          
        </div>
      )
    }
  },
  {
    field: "type",
    headerName: "Type",
    width: 100
  },
  {
    field:"title",
    headerName: "Title",
    width: 230
  },
  {
    field:"city",
    headerName: "City",
    width: 100
  },
 
];
export const RoomsColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 200
  },
  {
    field:"desc",
    headerName: "Desciption",
    width: 250
  },
  {
    field:"price",
    headerName: "Price",
    width: 100
  },
  {
    field:"maxPeople",
    headerName: "Max People",
    width: 100
  },
 
];
  
  