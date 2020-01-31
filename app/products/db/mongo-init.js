db.createUser(
    {
        user: "nicwalle",
        pwd: "wallenic",
        roles: [
            {
                role: "readWrite",
                db: "products"
            }
        ]
    }
);

db.products.insert([
    {
        name: "iPhone X",
        description: "This is a cool phone",
        price: 999,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-silver_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459946146"
    },
    {
        name: "Macbook Pro 16\"",
        description: "This is a cool laptop (RAM: 16GB etc.)",
        price: 3499,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825197207"
    },
    {
        name: "iPad Pro",
        description: "This is a cool tablet",
        price: 799,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563570657454"
    },
    {
        name: "Apple Watch Series 5",
        description: "This is a cool watch",
        price: 399,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWUQ2_VW_34FR+watch-44-alum-silver-nc-5s_VW_34FR_WF_CO?wid=750&hei=712&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1572037927131,1569365637670"
    }
]);
