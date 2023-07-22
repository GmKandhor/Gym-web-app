// import{ useState } from 'react'
// eslint-disable-next-line no-unused-vars
import{ trainers} from '../data'
// eslint-disable-next-line react/prop-types
const SearchInput = ({searchQuery,handleSearchQueryChange}) => {
 
   
   
    


return (
<div>
    <input type="text" value={searchQuery} onChange={handleSearchQueryChange} />
    {/* <ul>
    {filteredData.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul> */}
</div>
  )
  
}

export default SearchInput