const ShippingInfoList = ({ className }) => {
  const shippingInfo = [
    { id: 1, text: "Доставляем товары из заграницы в Россию" },
    { id: 2, text: "Стоимость от 550 рублей за заказ" },
    { id: 3, text: "1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽" },
  ];
  return shippingInfo.map((item) => (
    <p className={className} key={item.id}>
      {item.text}
    </p>
  ));
};

export default ShippingInfoList;
