        <View style={styles.container}>
            {Object.values(decks).length > 0 
                    ? Object.values(decks).map((deck) => {
                        return (
                            <View key={deck['title']}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.linkToDeck(deck['title'], deck['cards'])
                                    }
                                >
                                    <Text style={{ fontSize: 60 }}>
                                        {deck['title']}
                                    </Text>
                                     <Text>{deck['cards'].length} cards</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                    : <Text>No decks found. Please create one.</Text>
                    }