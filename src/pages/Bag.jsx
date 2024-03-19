import React, { Fragment } from 'react';
import Cart from '../components/Cart';
import { useCart } from 'react-use-cart';

const Bag = () => {
  const { items, updateItemQuantity, removeItem, isEmpty } = useCart();

  const product = items.map((item) => {
    return (
      <Fragment key={item.id}>
        <Cart
          price={item.price}
          title={item.title}
          image={item.image}
          extra={true}
          total={item.price * item.quantity}
          update={{
            up: () => updateItemQuantity(item.id, item.quantity + 1),
            down: () => updateItemQuantity(item.id, item.quantity - 1),
          }}
          remove={() => removeItem(item.id)}
        />
      </Fragment>
    );
  });
  return (
    <section className="Bag">
      {' '}
      <div className="Container">
        {isEmpty && <h2 className='title-2'>Basket is empty</h2>} 
        <div className="Bag__row">{product}</div>
      </div>
    </section>
  );
};

export default Bag;
