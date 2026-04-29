using System;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Windows;

namespace MaterialOrders
{
    public partial class MaterialOrdersWindow : Window
    {
        private readonly ObservableCollection<MaterialOrderItem> _orders = new();

        public MaterialOrdersWindow()
        {
            InitializeComponent();
            OrdersDataGrid.ItemsSource = _orders;
            UpdateGrandTotal();
        }

        private void AddMaterialButton_Click(object sender, RoutedEventArgs e)
        {
            var materialName = MaterialNameTextBox.Text.Trim();
            var hasQuantity = int.TryParse(QuantityTextBox.Text, NumberStyles.Integer, CultureInfo.InvariantCulture, out var quantity);
            var hasPrice = decimal.TryParse(UnitPriceTextBox.Text.Replace(',', '.'), NumberStyles.Number, CultureInfo.InvariantCulture, out var unitPrice);

            if (string.IsNullOrWhiteSpace(materialName))
            {
                MessageBox.Show("Введите название материала.", "Проверка данных", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            if (!hasQuantity || quantity <= 0)
            {
                MessageBox.Show("Количество должно быть целым числом больше 0.", "Проверка данных", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            if (!hasPrice || unitPrice <= 0)
            {
                MessageBox.Show("Цена должна быть числом больше 0.", "Проверка данных", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            _orders.Add(new MaterialOrderItem
            {
                MaterialName = materialName,
                Quantity = quantity,
                UnitPrice = unitPrice
            });

            MaterialNameTextBox.Clear();
            QuantityTextBox.Clear();
            UnitPriceTextBox.Clear();
            MaterialNameTextBox.Focus();

            UpdateGrandTotal();
        }

        private void DeleteSelectedButton_Click(object sender, RoutedEventArgs e)
        {
            if (OrdersDataGrid.SelectedItem is not MaterialOrderItem selectedOrder)
            {
                MessageBox.Show("Выберите строку для удаления.", "Удаление", MessageBoxButton.OK, MessageBoxImage.Information);
                return;
            }

            _orders.Remove(selectedOrder);
            UpdateGrandTotal();
        }

        private void ClearAllButton_Click(object sender, RoutedEventArgs e)
        {
            if (_orders.Count == 0)
            {
                return;
            }

            var result = MessageBox.Show("Очистить весь список заказов?", "Подтверждение", MessageBoxButton.YesNo, MessageBoxImage.Question);
            if (result != MessageBoxResult.Yes)
            {
                return;
            }

            _orders.Clear();
            UpdateGrandTotal();
        }

        private void UpdateGrandTotal()
        {
            decimal total = 0;
            foreach (var order in _orders)
            {
                total += order.TotalPrice;
            }

            GrandTotalTextBlock.Text = $"{total:N2} ₽";
        }
    }
}
