import { Link } from "react-router-dom";

const MySingleData = ({singleData}) => {
  console.log('single data', singleData)
  const {name,address,birth,_id, collegeName,email,phone,photoUrl,subject} = singleData;
  return (
    <tr className="border-2">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-12 h-12">
              {photoUrl && (
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{collegeName}</td>
      <td>{subject}</td>
      <td>{birth}</td>
      <th>
      <Link to={`/${_id}`} className="btn btn-outline border-0 border-b-4 mt-4">View Details</Link >
      </th>
    </tr>
  );
};

export default MySingleData;
