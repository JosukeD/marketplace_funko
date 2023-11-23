import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { launchCamera } from 'react-native-image-picker';


const API_BASE_URL = 'https://marketplacefunko-production.up.railway.app/api'; // Reemplaza con la URL correcta


const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isAddingFunko, setIsAddingFunko] = useState(false);
  const [newFunkoTitle, setNewFunkoTitle] = useState('');
  const [newFunkoImage, setNewFunkoImage] = useState('');
  const [newFunkoPrice, setNewFunkoPrice] = useState('');
  const [newFunkoSeries, setNewFunkoSeries] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isDeletingFunko, setIsDeletingFunko] = useState(false);
  const [selectedFunko, setSelectedFunko] = useState(null);

  useEffect(() => {
    const data = [
      {"handle":"black-panther","title":"Black Panther","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897627/Black_Panther_Shirts_and_Jackets_0490e751-49fc-42a3-bf83-d59d3acd753e_large.jpg","series":["Pop! Tees & Apparel","Funko Target Exclusives"]},
      {"handle":"prison-mike","title":"Prison Mike","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897282/Prison_Mike_Pins_and_Badges_25cd17fc-9e3c-4eda-88fc-4cd17de3f2dd_large.JPG","series":["Chase Pieces","Pop! Pins"]},
      {"handle":"pam-beesly","title":"Pam Beesly","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897281/Pam_Beesly_Pins_and_Badges_d3dd70b8-d418-4729-9b02-6fe010edd235_large.JPG","series":["Pop! Pins"]},
      {"handle":"jim-halpert","title":"Jim Halpert","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897280/Jim_Halpert_Pins_and_Badges_101808e8-2a03-4eee-8d6e-2a6a8031b43d_large.JPG","series":["Pop! Pins"]},
      {"handle":"dwight-schrute","title":"Dwight Schrute","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897276/Dwight_Schrute_Pins_and_Badges_1187b27b-9c96-488e-910d-1341516721eb_large.JPG","series":["Pop! Pins"]},
      {"handle":"michael-scott","title":"Michael Scott","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897273/Michael_Scott_Pins_and_Badges_a0d46d01-147c-4d53-9a4c-3316bb516e0f_large.JPG","series":["Pop! Pins"]},
      {"handle":"c-3po-inferno","title":"C-3PO (Inferno)","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/897132/C-3PO_%2528Orange%2529_Vinyl_Art_Toys_85aedcda-1346-4ce9-972a-ad89dec757d6_large.jpg","series":["Hikari","Hikari Star Wars"]},
      {"handle":"funkoverse-harry-potter-4-pack-(wizarding-world)","title":"Funkoverse Harry Potter","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896896/Funkoverse_Harry_Potter_%25284_Pack%2529_%2528Wizarding_World%2529_Board_Games_97dd9e3e-a321-4b7b-b654-46d72a187e57_large.JPG","series":["Funkoverse"]},
      {"handle":"twinkie-the-kid","title":"Twinkie the Kid","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896892/Twinkie_the_Kid_Shirts_and_Jackets_15f3e09d-fc55-4ef9-ae19-487723c2bfa9_large.JPG","series":["Pop! Tees & Apparel","Funko Target Exclusives"]},
      {"handle":"twinkie-the-kid-metallic","title":"Twinkie the Kid (Metallic)","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896890/Twinkie_the_Kid_%2528Metallic%2529_Vinyl_Art_Toys_28dc8669-5b9a-48ea-a056-e7240a8b3982.JPG","series":["Pop! Vinyl","Pop! Ad Icons","Funko Target Exclusives"]},
      {"handle":"sam-with-candy","title":"Sam (with Candy)","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896486/Sam_%2528with_Candy%2529_Vinyl_Art_Toys_dd2e8e05-1d25-4560-b98b-5dd3a49d1797.jpg","series":["Pop! Vinyl","Pop! Movies","Special Edition (Funko Pop!s)"]},
      {"handle":"freddy-frostbear","title":"Freddy Frostbear","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896279/Freddy_Frostbear_Action_Figures_159222f1-2dfb-4884-8516-48214d0e44dd.JPG","series":["Funko Walmart Exclusives","Five Nights at Freddy's: Special Delivery"]},
      {"handle":"freddy-frostbear","title":"Freddy Frostbear","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896266/Freddy_Frostbear_Plush_Toys_de2d6b81-8c54-4ac1-9057-56caeab27920_large.JPG","series":["Pop! Plush","Funko Walmart Exclusives"]},
      {"handle":"five-nights-at-freddy's-survive-'til-6-a.m.-game","title":"Fnaf Survive","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896250/Five_Nights_at_Freddy%2527s_Survive_%2527Til_6_a.m._Game_Board_Games_394cd049-ba41-4e99-aa77-8971c1c54600_large.JPG","series":["Pop! Board Games"]},
      {"handle":"the-claw-i've-been-chosen-tee","title":"The Claw Chosen Tee","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896124/The_Claw_I%2527ve_Been_Chosen_Tee_Shirts_and_Jackets_62820edf-e223-4d40-b0d0-eb3aee4c1151_large.jpg","series":["Pop! Tees & Apparel","Funko FYE Exclusives"]},
      {"handle":"ig-11-with-the-child-pop-and-shirt","title":"The Child Pop","imageName":"https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/896068/IG-11_with_The_Child_Pop_and_Shirt_Vinyl_Art_Toys_","series":["Pop! Vinyl","Pop! Star Wars","Funko Target Exclusives"]}
      ,];

      const productsWithPrices = data.map(product => ({
        ...product,
        price: generateRandomPrice(),
      }));
  
      setProducts(productsWithPrices);
    }, []);
  
    const generateRandomPrice = () => {
      const price = Math.floor(Math.random() * 41) + 20 + 0.99;
      return `$${price.toFixed(2)}`;
    };

    const handleDeleteFunko = () => {
      const updatedProducts = products.filter((funko) => funko !== selectedFunko);
      setProducts(updatedProducts);
      setIsDeletingFunko(false);
    };

    const confirmDeleteFunko = () => {
      Alert.alert(
        'Confirmar eliminación',
        '¿Seguro que deseas eliminar este Funko?',
        [
          { text: 'Cancelar', style: 'cancel' },
          { text: 'Confirmar', onPress: handleDeleteFunko },
        ],
        { cancelable: false }
      );
    };
  
    const renderProductItem = ({ item }) => {
      return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('Producto seleccionado:', item.title)}>
          <Image source={{ uri: item.imageName }} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.title}</Text>
          <Text style={{ marginTop: 5, fontSize: 14, color: 'gray', textAlign: 'center' }}>{item.price}</Text>
    
          {/* Button to delete the Funko */}
          <TouchableOpacity onPress={() => {
            setSelectedFunko(item);
            confirmDeleteFunko();
          }}>
            <Text style={{ color: 'red' }}>Eliminar Funko</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      );
    };
    
  
    const renderAddFunkoButton = () => (
      <TouchableOpacity
        style={{ margin: 10, alignItems: 'center' }}
        onPress={() => setIsAddingFunko(true)}
      >
        <View style={{ width: 150, height: 150, borderRadius: 10, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, color: 'gray' }}>+</Text>
        </View>
        <Text style={{ marginTop: 5, fontSize: 16, textAlign: 'center' }}>Agregar Funko</Text>
      </TouchableOpacity>
    );
  
    const handleAddFunko = () => {
      if (!newFunkoTitle || !newFunkoPrice || !newFunkoSeries) {
        Alert.alert('Error', 'Completa todos los campos para agregar el Funko.');
        return;
      }
    
      const options = {
        title: 'Seleccionar imagen',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Tomar foto',
        chooseFromLibraryButtonTitle: 'Elegir de la galería',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      }

      const newFunko = {
        handle: newFunkoTitle.toLowerCase().replace(/\s+/g, '-'),
        title: newFunkoTitle,
        imageName: newFunkoImage,
        price: `$${parseFloat(newFunkoPrice).toFixed(2)}`, 
        series: newFunkoSeries,
      };
  
      setProducts((prevProducts) => [...prevProducts, newFunko]);
  
      setNewFunkoTitle('');
      setNewFunkoImage('');
      setNewFunkoPrice('');
      setNewFunkoSeries('');
      setIsAddingFunko(false);
    }; 
  
    const handleSearch = () => {
      const filteredProducts = products.filter((product) => {
        const productTitle = product.title.toLowerCase();
        const searchTerm = searchText.toLowerCase();
        return productTitle.includes(searchTerm);
      });
  
      setProducts(filteredProducts);
    }

    const openImagePicker = async () => {
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access media library is required!');
        return;
      }
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setNewFunkoImage(result.uri);
      }
    };

    return (
      <ImageBackground source={require('./funkobackground.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
        {/* Recuadro central */}
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        {/* Barra superior */}
      <View style={{ height: '15%', backgroundColor: 'rgb(3, 30, 60)', flexDirection: 'row', padding: 10, alignItems: 'flex-end' }}>
        <Image source={require('./logo.jpg')} style={{ width: 60, height: 60 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10, color: 'white', alignSelf: 'center', marginTop: '15%' }}>MARKETPLACE FUNKOS</Text>
      </View>

      {/* Barra de búsqueda */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginTop: '5%' }}>
        <TextInput
          style={{ flex: 1, backgroundColor: 'white', padding: 10, borderRadius: 5 }}
          placeholder="Buscar productos..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity
          style={{ marginLeft: 10, backgroundColor: 'rgb(3, 30, 60)', padding: 10, borderRadius: 5 }}
          onPress={handleSearch}
        >
          <Text style={{ color: 'white' }}>Buscar</Text>
        </TouchableOpacity>
      </View>
  
        {/* Lista de productos */}
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.handle}
          numColumns={2}
          contentContainerStyle={{ padding: 10 }}
        />
  
        {/* Botón para agregar un Funko */}
        {renderAddFunkoButton()}
  
        {/* Modal para agregar un Funko */}
        <Modal
          visible={isAddingFunko}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsAddingFunko(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Agregar Funko</Text>

              {/* Campo para ingresar el nombre del Funko */}
              <View>
                <Text style={{ marginBottom: 5, color: 'gray' }}>Nombre</Text>
                <TextInput
                  placeholder="Título"
                  value={newFunkoTitle}
                  onChangeText={(text) => setNewFunkoTitle(text)}
                  style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
              </View>

              {/* Campo para ingresar el precio del Funko */}
              <View>
                <Text style={{ marginBottom: 5, color: 'gray' }}>Precio $</Text>
                <TextInput
                  placeholder="Precio"
                  value={newFunkoPrice}
                  onChangeText={(text) => setNewFunkoPrice(text)}
                  style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
              </View>

              {/* Campo para ingresar la serie del Funko (similar a la categoría) */}
              <View>
                <Text style={{ marginBottom: 5, color: 'gray' }}>Serie</Text>
                <TextInput
                  placeholder="Serie del Funko"
                  value={newFunkoSeries}
                  onChangeText={(text) => setNewFunkoSeries(text)}
                  style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 5, marginBottom: 10 }}
                />
              </View>

              {/* Campo para seleccionar una imagen de la cámara */}
              <TouchableOpacity onPress={openImagePicker}>
                <Text style={{ color: 'blue', marginBottom: 10 }}>Seleccionar imagen de la galería</Text>
              </TouchableOpacity>

              {/* Botón para agregar el Funko */}
              <TouchableOpacity
                style={{ backgroundColor: 'rgb(3, 30, 60)', padding: 10, borderRadius: 5, alignItems: 'center' }}
                onPress={handleAddFunko}
              >
                <Text style={{ color: 'white' }}>Agregar Funko</Text>
              </TouchableOpacity>

              {/* Botón para cancelar */}
              <TouchableOpacity
                style={{ marginTop: 10, alignItems: 'center' }}
                onPress={() => setIsAddingFunko(false)}
              >
                <Text style={{ color: 'rgb(3, 30, 60)' }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
    );
  };
  
  export default HomeScreen;
