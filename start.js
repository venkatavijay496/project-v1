document.addEventListener('DOMContentLoaded', function() {
    // 1. Get all buttons that act as dropdown triggers
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // 2. Loop through each button and attach the click listener
    dropdownToggles.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the link from navigating

            // Get the ID of the target dropdown menu from the 'data-target' attribute
            const targetId = this.getAttribute('data-target');
            const targetDropdown = document.getElementById(targetId);

            // Check if the clicked dropdown is currently open
            const isCurrentlyOpen = targetDropdown.classList.contains('show');

            // --- CLOSE ALL DROPDOWNS ---
            // Find all open dropdowns and close them (remove 'show' class)
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });

            // --- OPEN THE CLICKED DROPDOWN (if it wasn't open already) ---
            // This logic ensures that clicking an open menu closes it, 
            // but clicking a closed menu opens it (after closing others).
            if (!isCurrentlyOpen) {
                targetDropdown.classList.add('show');
            }
        });
    });

    // 3. Close dropdowns when the user clicks anywhere else on the document
    document.addEventListener('click', function(event) {
        let isClickInsideDropdown = false;
        
        // Check if the click occurred inside any dropdown-container
        document.querySelectorAll('.dropdown-container').forEach(container => {
            if (container.contains(event.target)) {
                isClickInsideDropdown = true;
            }
        });

        // If the click was NOT inside any dropdown container, close all menus
        if (!isClickInsideDropdown) {
             document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});