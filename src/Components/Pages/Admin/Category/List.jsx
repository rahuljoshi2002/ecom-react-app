












return (
    <div>
        <link to="/admin/category/add">Add</link>
        <table border={1} align="center" cellSpacing={0} cellPadding={10}>
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                    <img alt="" src={item.thumbnail} height="100" />
                </td>
                <td><button onClick={()=>deletedata(item.id)}>Delete</button></td>
            </tr>
            ))}
        </table>
    </div>
);
};