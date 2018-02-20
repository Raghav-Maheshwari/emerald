## Inspiration

With the United States’ withdrawal from the Paris Accords, it’s become pretty obvious that relying on the government to effectively encourage actions to combat climate change or incentivize the use of clean energy is near impossible. And even when incentives are in place for companies and individuals to reduce their carbon footprint, the process for receiving benefits is often very bureaucratic and can take a while. We also figured that if companies are able to receive the benefits of these incentives, these benefits should also be available to individuals. We believe the solution to this bureaucratic and inefficient problem lies in Emerald.

## What it does

Using Hyperledger, Emerald facilitates the creation of smart contracts that incentivize reducing carbon footprints: a company will receive a payment from an escrow by satisfying conditions that lead to environmentally friendly practices, which are verified by consensus from trusted third parties such as NGOs. Smart contracts automatically enforce the obligation that a company receive benefits if and only if the conditions of the contract are satisfied; i.e saving x amount of energy per month, reducing carbon footprint by 20% in two years etc. Once a transaction is made, it is added to an immutable ledger, providing trust, accountability, and transparency.

## How it's built

Emerald is built using IBM’s Blockchain developer environment and Hyperledger Composer, which allows for rapid prototyping of business networks models on the blockchain. Transactions betweens models on the network, such as participants and assets, are scripted using JavaScript.

## Challenges faced

We initially built Emerald on top of Ethereum, and quickly discovered that not only is the language of Ethereum contracts (solidity) extremely limiting, but the features that we were building out including consensus and publicly named “supernodes” were already a part of hyperledger. One major challenge was coming to this realization quite late, which meant we only had limited time to set up our business network on Hyperledger Composer.

## Accomplishements we're proud of:

None of us had ever built on the blockchain before, and working with all these different models gave us a hands-on understanding of the mechanism by which the network and smart contracts operate. We got a working blockchain structure running having no prior experience, which actually serves as a minimum viable product for a multi-parameter judgement system.

## What we learned:

The models that exist for blockchain are incredibly diverse and serve a variety of purposes. Decentralized Apps (Dapps) for example have a fairly sophisticated structure which, despite making them more robust, also makes them much more difficult to develop. Smart contracts mirror this reality. Generally, we also learned more about how blockchain systems work under the hood - how math and cryptography make them immutable and trustworthy even though they are decentralized.

## What's next for Emerald

Our priority is to create a web portal for Emerald to facilitate accessibility and create a more intuitive visualization tool for the business network, where participants of the network (such as companies) can browse for open contracts and accept their conditions, while governments and other entities can create new smart contracts. We will also consider the possibility of creating a coin and hosting an ICO to create value proposition for the Emerald blockchain.


