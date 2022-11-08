import { Items, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const items = [
    { name: "Cheese & Tomato", desc: "Italian-style six-cheese blend", price: 7.5 },
    { name: "BBQ Chicken", desc: "Chargrilled chicken, barbeque sauce, bacon, onions", price: 7.9 },
    { name: "Meat Feast", desc: "Ham, pepperoni, sausage, bacon, spicy beef", price: 8.1 },
    { name: "Piri-Piri Chicken", desc: "Chilli pepper sauce, chargrilled chicken", price: 8.8 },
    { name: "Hawaii", desc: "Ham, pineapple, mushrooms", price: 8.9 },
    { name: "Mediterranean", desc: "Chorizo, Italian-style sausage, jalapeno sausage", price: 9.5 },
    { name: "The Mexican", desc: "Jalapeno peppers, red peppers, spicy beef, onions", price: 9.7 },
    { name: "The Works", desc: "Pepperoni, sausage, ham, mushrooms, green peppers", price: 9.9 },
];

const getRandomItem = (arr: Items[]): string => {
    return arr[Math.floor(Math.random() * arr.length) + 1]?.id ?? "";
};

async function main() {
    console.log("Seeding Database");
    console.log("Creating payment methods");
    const debitCard = await prisma.paymentMethods.create({
        data: {
            enabled: true,
            name: "Debit Card",
        },
    });

    const paypal = await prisma.paymentMethods.create({
        data: {
            enabled: false,
            name: "PayPal",
        },
    });

    console.log(`Creating ${items.length} item${items.length === 1 ? "" : "s"}`);
    const dbItems = [];

    for (const itemData of items) {
        if (!itemData) continue;
        const item = await prisma.items.create({
            data: itemData,
        });
        dbItems.push(item);
    }

    console.log("Creating user with 2 orders");
    // const bob = await prisma.user.upsert({
    //     where: { email: "bob@avrg.dev" },
    //     update: {},
    //     create: {
    //         email: "bob@avrg.dev",
    //         name: "Bob",
    //         Orders: {
    //             create: [
    //                 {
    //                     price: 5.3,
    //                     billing_address: "Some random address",
    //                     payment_method: { connect: { id: debitCard.id } },
    //                     OrderItems: {
    //                         create: [
    //                             {
    //                                 item_id: { connect: dbItems[0] },
    //                             },
    //                             {
    //                                 item_id: { connect: dbItems[1] },
    //                             },
    //                         ],
    //                     },
    //                 },
    //                 { price: 15.43, billing_address: "Some other random address", payment_method: { connect: { id: paypal.id } } },
    //             ],
    //         },
    //     },
    //     include: { Orders: true },
    // });
    // console.log({ bob });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
