const { createApp, onMounted, ref, computed } = Vue;

const appConfig = {
  setup() {
    const categories = ref([
      {
        type: "Portrait Photography",
        services: [
          { name: "Individual Portraits", price: 150, notes: "Per session" },
          { name: "Family Portraits", price: 300, notes: "Per session" },
          { name: "Senior Portraits", price: 250, notes: "Per session" },
        ],
      },
      {
        type: "Wedding Photography",
        services: [
          { name: "Full-day coverage", price: 2000, notes: "Per session" },
          { name: "Engagement Photoshoot", price: 300, notes: "Per session" },
        ],
      },
      {
        type: "Event Photography",
        services: [
          { name: "Corporate Events", price: 150, notes: "Per hour" },
          { name: "Parties and Celebrations", price: 200, notes: "Per hour" },
          { name: "Concerts and Festivals", price: 250, notes: "Per event" },
        ],
      },
      {
        type: "Commercial Photography",
        services: [
          { name: "Product Photography", price: 100, notes: "Per hour" },
          { name: "Real Estate Photography", price: 150, notes: "Per session" },
          { name: "Corporate Headshots", price: 150, notes: "Per session" },
        ],
      },
    ]);

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
        alert("You have already choosed this service!");
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

    onMounted(() => {
      console.log("Vue is mounted");
      const storedServices = localStorage.getItem("selectedServices");
      if (storedServices) {
        selectedServices.value = JSON.parse(storedServices);
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
