class NFT {
    constructor(owner, tokenId, metadata) {
      this.owner = owner;
      this.tokenId = tokenId;
      this.metadata = metadata;
    }
  
    transfer(newOwner) {
      if (this.owner !== newOwner) {
        this.owner = newOwner;
        console.log(`NFT ${this.tokenId} transferred to ${newOwner}`);
      } else {
        console.log(`NFT ${this.tokenId} is already owned by ${newOwner}`);
      }
    }
  
    displayMetadata() {
      console.log(`Metadata for NFT ${this.tokenId}:`);
      console.log(this.metadata);
    }
  }
  
  // Example usage
  const nft1 = new NFT('Alice', 1, { name: 'Artwork', artist: 'John Doe' });
  
  nft1.displayMetadata(); // Display metadata
  nft1.transfer('Bob');   // Transfer ownership
  nft1.transfer('Alice'); // Try to transfer to the current owner
  
  // Create another NFT
  const nft2 = new NFT('Charlie', 2, { name: 'Digital Collectible', artist: 'Jane Doe' });
  nft2.displayMetadata();
  