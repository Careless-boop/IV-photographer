const { createApp, onMounted, ref, computed } = Vue;

const appConfig = {
  setup() {
    const categories = ref([]);
    const selectedServices = ref([]);
    const isModalOpen = ref(false);

    const totalPrice = computed(() => {
      return selectedServices.value.reduce(
        (total, service) => total + service.price,
        0
      );
    });

    const addToCart = (service) => {
      if (selectedServices.value.some((item) => item.name === service.name)) {
        alert("You have already chosen this service!");
      } else {
        selectedServices.value.push(service);
        localStorage.setItem(
          "selectedServices",
          JSON.stringify(selectedServices.value)
        );
      }
    };

    const removeFromCart = (index) => {
      selectedServices.value.splice(index, 1);
      localStorage.setItem(
        "selectedServices",
        JSON.stringify(selectedServices.value)
      );
    };

    const selectedServicesDetails = computed(() => {
      return selectedServices.value;
    });

    const selectedServicesCount = computed(() => {
      return selectedServices.value.length;
    });

    onMounted(async () => {
      console.log("Vue is mounted");
      const storedServices = localStorage.getItem("selectedServices");
      if (storedServices) {
        selectedServices.value = JSON.parse(storedServices);
      }

      try {
        const response = await fetch("http://localhost:8000/api.php");
        const data = await response.json();
        categories.value = data;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      categories,
      selectedServicesDetails,
      selectedServicesCount,
      addToCart,
      totalPrice,
      removeFromCart,
      isModalOpen,
    };
  },
};

createApp(appConfig).mount("#services");
