import './collection.css'
import RCollection from '../Hero-right-collection/r-collection'
import DataCollection from '../../util/collection'
import LeftCollection from '../Hero-left-collection/Left-collection'

function collection() {
  return (
    <section className='container collection'>

      {/* left side ===========  */}

      <div className="left-side">
        <LeftCollection />
      </div>


      {/* right side =========== */}

      <div className="right-side">
        <h1>All Collections</h1>
        <div className="card">
          {
            DataCollection.map((data, i) => {
              return <div key={i}>
                <RCollection name={data.name} image={data.image} sales_price={data.sales_price} old_price={data.old_prices} />
              </div>
            })
          }
        </div>

      </div>


    </section>
  )
}

export default collection