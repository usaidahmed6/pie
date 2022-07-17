import React, { useEffect, useState } from 'react'
import Navebar from '../navebar';
import './home.css';
import { getDocs, BiscuitsRef, deleteDoc, doc, db, onSnapshot, collection, CakesRef, BrowniesRef, CookiesRef, itemsRef } from './firebase';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [BiscuitsItem, setBiscuitsItem] = useState([false]);
  const [CakesItem, setCakesItem] = useState([false]);
  const [CookiesItem, setCookiesItem] = useState([false]);
  const [BrowniesItem, setBrowniesItem] = useState([false]);
  const [Item, setItem] = useState([false]);


  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)

    }, 2000)

    onSnapshot(
      collection(db, "Biscuits"),
      (snapshot) => {
        getCategory();
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "Cakes"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "Cookies"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "Brownies"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );

    onSnapshot(
      collection(db, "items"),
      (snapshot) => {
        getCategory()
      },

      (error) => {
        alert(error);
      }
    );


  }, [])

  // get itmes ***********************************************

  const getCategory = async () => {
    setLoading(true)
    const querySnapshotBiscuits = await getDocs(BiscuitsRef);
    const querySnapshotCakes = await getDocs(CakesRef);
    const querySnapshotCookies = await getDocs(CookiesRef);
    const querySnapshotBrownies = await getDocs(BrowniesRef);
    const querySnapshotItems = await getDocs(itemsRef);
    let itemBiscuits = [];
    let CakesItems = [];
    let CookiesItems = [];
    let BrowniesItems = [];
    let Items = [];

    querySnapshotBiscuits.forEach((doc) => {
      // console.log(doc.id, " Biscuits waley hey => ", doc.data());
      itemBiscuits.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotCakes.forEach((doc) => {
      //     // console.log(doc.id, " Cakes waley hey => ", doc.data());
      CakesItems.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotCookies.forEach((doc) => {
      //     // console.log(doc.id, " Cookies waley hey => ", doc.data());
      CookiesItems.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotBrownies.forEach((doc) => {
      //     // console.log(doc.id, " Cakes Brownies hey => ", doc.data());
      BrowniesItems.push({ id: doc.id, ...doc.data() });
    });
    querySnapshotItems.forEach((doc) => {
      //     // console.log(doc.id, " Cakes Brownies hey => ", doc.data());
      Items.push({ id: doc.id, ...doc.data() });
    });

    setCakesItem(CakesItems);
    setBiscuitsItem(itemBiscuits);
    setCookiesItem(CookiesItems);
    setBrowniesItem(BrowniesItems);
    setItem(Items)

    setTimeout(() => {
      setLoading(false)

    }, 2000)
  };


  // deleted all collections *********************
  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "Biscuits", id));
    await deleteDoc(doc(db, "Cakes", id));
    await deleteDoc(doc(db, "Cookies", id));
    await deleteDoc(doc(db, "Brownies", id));
    await deleteDoc(doc(db, "items", id));
  };


  return (
    <Navebar>
      {
        loading ?
          <div className='loader-container'>
            < div className="spinner-border">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div >

          :
          <div className='card-container'>

            {BiscuitsItem.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <img src={data.image} className="card-img-top image-Card" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> {data.description} </p>
                    <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                  </div>
                </div>
              );
            })}

            {CakesItem.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <img src={data.image} className="card-img-top image-Card" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> {data.description} </p>
                    <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                  </div>
                </div>
              );
            })}
            {CookiesItem.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <img src={data.image} className="card-img-top image-Card" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> {data.description} </p>
                    <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                  </div>
                </div>
              );
            })}

            {BrowniesItem.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <img src={data.image} className="card-img-top image-Card" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> {data.description} </p>
                    <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                  </div>
                </div>
              );
            })}

            {Item.map((data, index) => {
              return (
                <div className="card" key={index}>
                  <img src={data.image} className="card-img-top image-Card" />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text"> {data.description} </p>
                    <span className="btn-sm btn btn-danger btn-delete" onClick={() => deleteDocument(data.id)}>Delete</span>
                  </div>
                </div>
              );
            })}
          </div>
      }
    </Navebar >
  )
}

export default Home
