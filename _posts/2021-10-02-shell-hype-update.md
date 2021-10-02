---
title: Oct 2 Shell Hype Update
---


# What we're building:

### Vision:
- Shopify type of service, for creators to launch their own token restricted marketplace.
  - This looks like:
    - Creator can launch an NFT, those who buy this NFT then get access later on to an e-comm page, where they can purchase creators artwork.

### UX:
- Creator:
  1. Design token and launch on our marketplace. (Can earn royalties on secondary market sale of this token)
  2. Design / create artwork to be sold.
  3. Specify launch date for artwork.
  4. Sell, on individual e-comm page that is locked, only accessible by those who hold previously released token.
- Customer:
  1. Find token on our platform (or any other secondary Solana market)
  2. Purchase token. (This is actually minting a token, as the act of "buying" a token that hasn't existed yet is called mintng a token... i think...)
  3. Get access to private e-comm page, where they can get exclusive access to artwork sold by creator.


### Implementation:

#### What do we leverage:
- Metaplex Candy Machine
  - A framework (?) that allows us to mint tokens without an auction.(i.e. enables one-click buy)
- Solana protocol
  - This is the chain we are deploying our backend on...
- Metaplex Open Source UI
  - This will help us build the UX flow that we want to implement, as specified above.

#### What do we build:
- Front end that lets artists define their tokens.
- Backend that leverages metaplex and talks to Solana
- Backend that spin up custom e-comm pages.
- Front end template for custom e-comm pages.
  - Open question of: How do we allow for customization.
- Backend for our marketplace.
- Front end for our marketplace.
- Backend for e-comm page locking mechanism. (Token verification system as auth...)
