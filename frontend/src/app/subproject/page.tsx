"use client";
import React, { useState } from 'react';
import { Plus, Minus, X, Save, Edit, FileText, FolderPlus, List } from 'lucide-react';
import Sidebar from "../../components/Sidebar";

// Define interface for Proyecto
interface Proyecto {
  id_proyecto: number;
  nombre: string;
  descripcion: string;
  fecha_creacion: string;
}

// Define interface for Item (hierarchical partidas)
interface Item {
  id_proyecto: number;
  numero: string;
  partida: string;
  unidad?: string;
  metrado?: number;
  precio?: number;
  parcial?: number;
  isTitle: boolean;
  level: number;
  children?: Item[];
}

const Subproject = () => {
  // Simular parámetros de búsqueda - en tu implementación real vendrá de useSearchParams
  const [selectedProyectoId] = useState<number>(1);

  // State to track expanded titles
  const [expandedTitles, setExpandedTitles] = useState<string[]>(['01', '02', '03', '03.01', '03.02', '03.03']);

  // State for projects
  const proyectos: Proyecto[] = [
    {
      id_proyecto: 1,
      nombre: "CONSTRUCCIÓN DEL LOCAL SOCIAL",
      descripcion: "Construcción de local comunal",
      fecha_creacion: "2024-01-15",
    },
  ];

  // State for items with proper structure matching the second image
  const [items, setItems] = useState<Item[]>([
    {
      id_proyecto: 1,
      numero: "01",
      partida: "TRABAJOS PROVISIONALES",
      isTitle: true,
      level: 1,
      unidad: "",
      metrado: 0,
      precio: 0,
      parcial: 709.96,
      children: [
        {
          id_proyecto: 1,
          numero: "01.01",
          partida: "Movilización y desmovilización de equipo y herramientas",
          isTitle: false,
          level: 2,
          unidad: "GLB",
          metrado: 1.00,
          precio: 300.00,
          parcial: 300.00,
        },
        {
          id_proyecto: 1,
          numero: "01.02",
          partida: "Traslado de materiales a obra",
          isTitle: false,
          level: 2,
          unidad: "GLB",
          metrado: 1.00,
          precio: 280.00,
          parcial: 280.00,
        },
        {
          id_proyecto: 1,
          numero: "01.03",
          partida: "Campamento provisional",
          isTitle: false,
          level: 2,
          unidad: "GLB",
          metrado: 1.00,
          precio: 129.96,
          parcial: 129.96,
        },
      ],
    },
    {
      id_proyecto: 1,
      numero: "02",
      partida: "TRABAJOS PRELIMINARES",
      isTitle: true,
      level: 1,
      unidad: "",
      metrado: 0,
      precio: 0,
      parcial: 67.50,
      children: [
        {
          id_proyecto: 1,
          numero: "02.01",
          partida: "Trazo, niveles y replanteo sin equipo",
          isTitle: false,
          level: 2,
          unidad: "M2",
          metrado: 225.00,
          precio: 0.30,
          parcial: 67.50,
        },
      ],
    },
    {
      id_proyecto: 1,
      numero: "03",
      partida: "CERCO PERIMETRICO Y BASE PARA TRANSFORMADOR",
      isTitle: true,
      level: 1,
      unidad: "",
      metrado: 0,
      precio: 0,
      parcial: 14713.85,
      children: [
        {
          id_proyecto: 1,
          numero: "03.01",
          partida: "MOVIMIENTO DE TIERRAS",
          isTitle: true,
          level: 2,
          unidad: "",
          metrado: 0,
          precio: 0,
          parcial: 1215.00,
          children: [
            {
              id_proyecto: 1,
              numero: "03.01.01",
              partida: "Excavación de zanjas pimientos corridos",
              isTitle: false,
              level: 3,
              unidad: "M3",
              metrado: 18.50,
              precio: 15.00,
              parcial: 277.50,
            },
            {
              id_proyecto: 1,
              numero: "03.01.02",
              partida: "Refine, nivel, y compac. Terreno normal con compactadora",
              isTitle: false,
              level: 3,
              unidad: "M2",
              metrado: 225.00,
              precio: 1.50,
              parcial: 337.50,
            },
            {
              id_proyecto: 1,
              numero: "03.01.03",
              partida: "Colocación de grava de 1\", en piso de subestación",
              isTitle: false,
              level: 3,
              unidad: "M2",
              metrado: 20.00,
              precio: 30.00,
              parcial: 600.00,
            },
          ],
        },
        {
          id_proyecto: 1,
          numero: "03.02",
          partida: "CONCRETO SIMPLE",
          isTitle: true,
          level: 2,
          unidad: "",
          metrado: 0,
          precio: 0,
          parcial: 2700.00,
          children: [
            {
              id_proyecto: 1,
              numero: "03.02.01",
              partida: "Concreto ciclopeo 1:8 + 30% p.g Cimientos corridos",
              isTitle: false,
              level: 3,
              unidad: "M3",
              metrado: 18.50,
              precio: 95.80,
              parcial: 1772.30,
            },
            {
              id_proyecto: 1,
              numero: "03.02.02",
              partida: "Sobrecimientos concreto 1:8 + 25% p.m.",
              isTitle: false,
              level: 3,
              unidad: "M3",
              metrado: 2.54,
              precio: 125.00,
              parcial: 317.50,
            },
            {
              id_proyecto: 1,
              numero: "03.02.03",
              partida: "Sobrecimientos encofrado y desencofrado",
              isTitle: false,
              level: 3,
              unidad: "M2",
              metrado: 45.20,
              precio: 13.50,
              parcial: 610.20,
            },
          ],
        },
        {
          id_proyecto: 1,
          numero: "03.03",
          partida: "CONCRETO ARMADO",
          isTitle: true,
          level: 2,
          unidad: "",
          metrado: 0,
          precio: 0,
          parcial: 3000.60,
          children: [
            {
              id_proyecto: 1,
              numero: "03.03.01",
              partida: "Losa de cimentacion: Concreto 210 kg/cm2, base trafo",
              isTitle: false,
              level: 3,
              unidad: "M3",
              metrado: 3.60,
              precio: 165.00,
              parcial: 594.00,
            },
            {
              id_proyecto: 1,
              numero: "03.03.02",
              partida: "Losa de cimentacion: Encofrado y desencofrado",
              isTitle: false,
              level: 3,
              unidad: "M2",
              metrado: 5.50,
              precio: 15.50,
              parcial: 85.25,
            },
            {
              id_proyecto: 1,
              numero: "03.03.03",
              partida: "Losa de cimentacion: Acero",
              isTitle: false,
              level: 3,
              unidad: "KG",
              metrado: 120.00,
              precio: 2.70,
              parcial: 324.00,
            },
          ],
        },
      ],
    },
  ]);

  // State for modal and selected row
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'insert_title' | 'insert_subtitle' | 'insert_partida' | 'edit' | null>(null);
  const [formData, setFormData] = useState<{ partida: string; unidad?: string; metrado?: number; precio?: number }>({ partida: '' });
  const [currentItem, setCurrentItem] = useState<Item | null>(null);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  // Get items for selected project - FIXED: Return reference to actual array
  const getItemsProyecto = (id: number): Item[] => {
    return items.filter((item) => item.id_proyecto === id);
  };

  // Get selected project name
  const getProyectoNombre = (id: number): string => {
    const proyecto = proyectos.find((p) => p.id_proyecto === id);
    return proyecto ? proyecto.nombre : "Proyecto Desconocido";
  };

  // Toggle expansion of a title
  const toggleExpand = (numero: string) => {
    setExpandedTitles((prev) =>
      prev.includes(numero)
        ? prev.filter((n) => n !== numero)
        : [...prev, numero]
    );
  };

  // Expand all titles recursively
  const expandAll = () => {
    const getAllTitleNumbers = (items: Item[]): string[] => {
      const numbers: string[] = [];
      items.forEach(item => {
        if (item.isTitle) {
          numbers.push(item.numero);
          if (item.children) {
            numbers.push(...getAllTitleNumbers(item.children));
          }
        }
      });
      return numbers;
    };
    
    const projectItems = items.filter(item => item.id_proyecto === selectedProyectoId);
    const allTitleNumbers = getAllTitleNumbers(projectItems);
    setExpandedTitles(allTitleNumbers);
  };

  // Collapse all titles
  const collapseAll = () => {
    setExpandedTitles([]);
  };

  // NUEVA FUNCIÓN: Insertar item en la posición correcta de forma recursiva
  const insertItemRecursively = (items: Item[], targetNumber: string, newItem: Item): boolean => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      
      if (item.numero === targetNumber) {
        // Encontramos el item objetivo
        // Insertar el nuevo item justo después
        items.splice(i + 1, 0, newItem);
        return true;
      }
      
      // Si tiene hijos, buscar recursivamente
      if (item.children && item.children.length > 0) {
        if (insertItemRecursively(item.children, targetNumber, newItem)) {
          return true;
        }
      }
    }
    return false;
  };

  // NUEVA FUNCIÓN: Renumerar items recursivamente manteniendo la estructura jerárquica
  const renumberItemsRecursively = (items: Item[], parentNumber: string = '') => {
    items.forEach((item, index) => {
      if (parentNumber === '') {
        // Es un item raíz
        item.numero = String(index + 1).padStart(2, '0');
      } else {
        // Es un hijo
        item.numero = `${parentNumber}.${String(index + 1).padStart(2, '0')}`;
      }
      
      // Renumerar hijos recursivamente
      if (item.children && item.children.length > 0) {
        renumberItemsRecursively(item.children, item.numero);
      }
    });
  };

  // NUEVA FUNCIÓN: Obtener el nivel correcto basado en la estructura jerárquica
  const getCorrectLevel = (numero: string): number => {
    const parts = numero.split('.');
    return parts.length;
  };
  const findItemRecursive = (items: Item[], numero: string): { item: Item; parent?: Item; index: number } | null => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.numero === numero) {
        return { item, index: i };
      }
      if (item.children) {
        const found = findItemRecursive(item.children, numero);
        if (found) {
          return { ...found, parent: item };
        }
      }
    }
    return null;
  };

  // Find an item by number - FIXED: Search in all items, not filtered
  const findItem = (numero: string): { item: Item; parent?: Item; index: number } | null => {
    return findItemRecursive(items, numero);
  };

  // Renumber root items
  const renumberRoots = (roots: Item[]) => {
    roots.forEach((item, i) => {
      item.numero = String(i + 1).padStart(2, '0');
      if (item.children) {
        renumberChildren(item.children, item.numero);
      }
    });
  };

  // Renumber children with correct sequence
  const renumberChildren = (children: Item[], parentNumber: string) => {
    children.forEach((child, i) => {
      const nextNumber = String(i + 1).padStart(2, '0');
      child.numero = `${parentNumber}.${nextNumber}`;
      if (child.children) {
        renumberChildren(child.children, child.numero);
      }
    });
  };

  // Recalculate parcial for an item and its children
  const recalculateParcial = (item: Item): number => {
    if (item.isTitle) {
      let sum = 0;
      if (item.children) {
        item.children.forEach((child) => {
          sum += recalculateParcial(child);
        });
      }
      item.parcial = sum;
      return sum;
    } else {
      const parcial = (item.metrado || 0) * (item.precio || 0);
      item.parcial = parcial;
      return parcial;
    }
  };

  // Recalculate all parcials
  const recalculateAllParcials = (roots: Item[]) => {
    roots.forEach((root) => {
      recalculateParcial(root);
    });
  };

  // Handle row selection
  const handleRowSelect = (numero: string) => {
    setSelectedRow((prev) => (prev === numero ? null : numero));
  };

  // Handle insert title (main level)
  const handleInsertTitle = () => {
    if (!selectedProyectoId) return;
    setModalType('insert_title');
    setShowModal(true);
    setFormData({ partida: '' });
    setCurrentItem(null);
  };

  // Handle insert subtitle
  const handleInsertSubtitle = () => {
    if (!selectedRow || !selectedProyectoId) return;
    const found = findItem(selectedRow);
    if (found) {
      setModalType('insert_subtitle');
      setFormData({ partida: '' });
      setCurrentItem(found.item);
      setShowModal(true);
    }
  };

  // Handle insert partida
  const handleInsertPartida = () => {
    if (!selectedRow || !selectedProyectoId) return;
    const found = findItem(selectedRow);
    if (found) {
      setModalType('insert_partida');
      setFormData({ partida: '', unidad: '', metrado: 0, precio: 0 });
      setCurrentItem(found.item);
      setShowModal(true);
    }
  };

  // Handle edit
  const handleEdit = () => {
    if (!selectedRow || !selectedProyectoId) return;
    const found = findItem(selectedRow);
    if (found) {
      setModalType('edit');
      setFormData({
        partida: found.item.partida,
        unidad: found.item.unidad,
        metrado: found.item.metrado,
        precio: found.item.precio,
      });
      setCurrentItem(found.item);
      setShowModal(true);
    }
  };

  // Handle modal submit - FIXED: Properly update items array and handle root items
  const handleModalSubmit = () => {
    if (!formData.partida) {
      alert("Por favor, completa el campo Partida.");
      return;
    }

    let newItems = [...items];

    if (modalType === 'insert_title') {
      // Insert new main title
      const newTitle: Item = {
        id_proyecto: selectedProyectoId!,
        numero: "temp",
        partida: formData.partida.toUpperCase(),
        isTitle: true,
        level: 1,
        children: [],
        unidad: '',
        metrado: 0,
        precio: 0,
        parcial: 0,
      };

      const projectItems = newItems.filter(item => item.id_proyecto === selectedProyectoId);
      const otherItems = newItems.filter(item => item.id_proyecto !== selectedProyectoId);

      if (selectedRow) {
        const found = findItemRecursive(projectItems, selectedRow);
        if (found && found.item.level === 1 && !found.parent) {
          // Insert after selected main title
          const insertIndex = found.index + 1;
          projectItems.splice(insertIndex, 0, newTitle);
        } else {
          // Add at end if selected is not main
          projectItems.push(newTitle);
        }
      } else {
        // Add at end
        projectItems.push(newTitle);
      }

      renumberRoots(projectItems);
      recalculateAllParcials(projectItems);
      
      // Mantener títulos expandidos después de agregar
      const getAllTitleNumbers = (items: Item[]): string[] => {
        const numbers: string[] = [];
        items.forEach(item => {
          if (item.isTitle) {
            numbers.push(item.numero);
            if (item.children) {
              numbers.push(...getAllTitleNumbers(item.children));
            }
          }
        });
        return numbers;
      };
      
      const allTitleNumbers = getAllTitleNumbers(projectItems);
      const currentlyExpanded = expandedTitles.filter(num => 
        allTitleNumbers.includes(num)
      );
      // Agregar el nuevo título a los expandidos si tiene contenido
      if (newTitle.children && newTitle.children.length > 0) {
        currentlyExpanded.push(newTitle.numero);
      }
      setExpandedTitles(currentlyExpanded);
      
      // Combine back all items
      newItems = [...otherItems, ...projectItems];
    } else if (modalType === 'insert_subtitle' && selectedRow && currentItem) {
      const found = findItem(selectedRow);
      if (found) {
        // Determinar el nivel correcto basado en la estructura jerárquica
        const targetLevel = found.item.isTitle ? found.item.level + 1 : found.item.level;
        
        const newSubtitle: Item = {
          id_proyecto: selectedProyectoId!,
          numero: "temp", // Se renumerará después
          partida: formData.partida.toUpperCase(),
          isTitle: true,
          level: targetLevel,
          children: [],
          unidad: '',
          metrado: 0,
          precio: 0,
          parcial: 0,
        };

        // Obtener todos los items del proyecto
        const projectItems = newItems.filter(item => item.id_proyecto === selectedProyectoId);
        const otherItems = newItems.filter(item => item.id_proyecto !== selectedProyectoId);

        if (found.item.isTitle) {
          // Insertar como primer hijo del título seleccionado
          if (!found.item.children) found.item.children = [];
          found.item.children.unshift(newSubtitle);
          
          // Auto expand parent title
          setExpandedTitles(prev => [...prev, found.item.numero]);
        } else {
          // Insertar como hermano justo después de la partida seleccionada
          insertItemRecursively(projectItems, selectedRow, newSubtitle);
          
          // Expandir el padre si existe
          if (found.parent) {
            setExpandedTitles(prev => [...prev, found.parent!.numero]);
          }
        }

        // Renumerar toda la estructura del proyecto manteniendo la jerarquía
        renumberItemsRecursively(projectItems);
        
        // Actualizar los niveles correctos basados en la numeración
        const updateLevelsRecursively = (items: Item[]) => {
          items.forEach(item => {
            item.level = getCorrectLevel(item.numero);
            if (item.children && item.children.length > 0) {
              updateLevelsRecursively(item.children);
            }
          });
        };
        
        updateLevelsRecursively(projectItems);
        
        // Recalcular parciales
        recalculateAllParcials(projectItems);
        
        // Combinar de vuelta todos los items
        newItems = [...otherItems, ...projectItems];
      }
    } else if (modalType === 'insert_partida' && selectedRow) {
      if (!formData.unidad || formData.metrado === undefined || formData.precio === undefined) {
        alert("Por favor, completa todos los campos para la partida.");
        return;
      }

      const found = findItem(selectedRow);
      if (found) {
        // Determinar el nivel correcto basado en la estructura jerárquica
        const targetLevel = found.item.isTitle ? found.item.level + 1 : found.item.level;

        const newPartida: Item = {
          id_proyecto: selectedProyectoId!,
          numero: "temp", // Se renumerará después
          partida: formData.partida,
          isTitle: false,
          level: targetLevel,
          unidad: formData.unidad,
          metrado: formData.metrado,
          precio: formData.precio,
          parcial: formData.metrado * formData.precio,
        };

        // Obtener todos los items del proyecto
        const projectItems = newItems.filter(item => item.id_proyecto === selectedProyectoId);
        const otherItems = newItems.filter(item => item.id_proyecto !== selectedProyectoId);

        if (found.item.isTitle) {
          // Insertar como primer hijo del título seleccionado (igual que los subtítulos)
          if (!found.item.children) found.item.children = [];
          found.item.children.unshift(newPartida);
          
          // Auto expand parent title
          setExpandedTitles(prev => [...prev, found.item.numero]);
        } else {
          // Insertar como hermano justo después de la partida seleccionada
          insertItemRecursively(projectItems, selectedRow, newPartida);
          
          // Expandir el padre si existe
          if (found.parent) {
            setExpandedTitles(prev => [...prev, found.parent!.numero]);
          }
        }

        // Renumerar toda la estructura del proyecto manteniendo la jerarquía
        renumberItemsRecursively(projectItems);
        
        // Actualizar los niveles correctos basados en la numeración
        const updateLevelsRecursively = (items: Item[]) => {
          items.forEach(item => {
            item.level = getCorrectLevel(item.numero);
            if (item.children && item.children.length > 0) {
              updateLevelsRecursively(item.children);
            }
          });
        };
        
        updateLevelsRecursively(projectItems);
        
        // Recalcular parciales
        recalculateAllParcials(projectItems);
        
        // Combinar de vuelta todos los items
        newItems = [...otherItems, ...projectItems];
      }
    } else if (modalType === 'edit' && currentItem) {
      // Edit current item
      if (currentItem.isTitle) {
        currentItem.partida = formData.partida.toUpperCase();
      } else {
        currentItem.partida = formData.partida;
        currentItem.unidad = formData.unidad;
        currentItem.metrado = formData.metrado;
        currentItem.precio = formData.precio;
        currentItem.parcial = (formData.metrado || 0) * (formData.precio || 0);
      }
      const projectItems = newItems.filter(item => item.id_proyecto === selectedProyectoId);
      recalculateAllParcials(projectItems);
    }

    setItems(newItems);
    setShowModal(false);
    setModalType(null);
    setFormData({ partida: '' });
    setCurrentItem(null);
    setSelectedRow(null);
  };

  // Get color classes based on level and type
  const getRowColorClass = (item: Item): string => {
    if (item.isTitle) {
      switch (item.level) {
        case 1:
          return 'bg-orange-100 text-orange-800 font-bold';
        case 2:
          return 'bg-blue-100 text-blue-800 font-semibold';
        case 3:
          return 'bg-green-100 text-green-800 font-medium';
        case 4:
          return 'bg-purple-100 text-purple-800 font-medium';
        case 5:
          return 'bg-pink-100 text-pink-800 font-medium';
        case 6:
          return 'bg-yellow-100 text-yellow-800 font-medium';
        case 7:
          return 'bg-indigo-100 text-indigo-800 font-medium';
        case 8:
          return 'bg-red-100 text-red-800 font-medium';
        default:
          return 'bg-gray-100 text-gray-800 font-medium';
      }
    } else {
      return 'text-gray-900 hover:bg-gray-50';
    }
  };

  // Render items recursively
  const renderItem = (item: Item, depth: number = 0): React.ReactNode[] => {
    const elements: React.ReactNode[] = [];
    
    // Calculate indentation based on level
    const indentationPx = item.level * 20;
    
    // Main item row
    elements.push(
      <tr
        key={item.numero}
        className={`${getRowColorClass(item)} cursor-pointer ${selectedRow === item.numero ? 'ring-2 ring-blue-500' : ''}`}
        onClick={() => handleRowSelect(item.numero)}
      >
        <td className="px-4 py-2">
          {item.isTitle && item.children && item.children.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(item.numero);
              }}
              className="text-gray-600 hover:text-gray-800 p-1"
            >
              {expandedTitles.includes(item.numero) ? (
                <Minus size={16} />
              ) : (
                <Plus size={16} />
              )}
            </button>
          )}
        </td>
        <td className="px-4 py-2 text-sm font-mono">{item.numero}</td>
        <td className="px-4 py-2 text-sm" style={{ paddingLeft: `${16 + indentationPx}px` }}>
          {item.partida}
        </td>
        <td className="px-4 py-2 text-sm text-center">{item.unidad || ''}</td>
        <td className="px-4 py-2 text-sm text-right">{item.metrado ? item.metrado.toFixed(2) : ''}</td>
        <td className="px-4 py-2 text-sm text-right">
          {item.precio ? item.precio.toFixed(2) : ''}
        </td>
        <td className="px-4 py-2 text-sm text-right font-medium">
          {item.parcial ? item.parcial.toFixed(2) : ''}
        </td>
      </tr>
    );

    // Children rows (if expanded)
    if (expandedTitles.includes(item.numero) && item.children) {
      item.children.forEach(child => {
        elements.push(...renderItem(child, depth + 1));
      });
    }

    return elements;
  };

  const isPartidaMode = modalType === 'insert_partida' || (modalType === 'edit' && currentItem && !currentItem.isTitle);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Toolbar */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 p-4 fixed h-full overflow-y-auto" style={{ left: '56px' }}>
        <h3 className="font-semibold text-gray-700 mb-4">Acciones</h3>
        <div className="space-y-2">
          <button
            onClick={handleEdit}
            disabled={!selectedRow}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${!selectedRow ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50 border border-blue-200'}`}
          >
            <Edit size={16} /> Editar
          </button>
          <button
            onClick={handleInsertTitle}
            className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-green-600 hover:bg-green-50 border border-green-200"
          >
            <FolderPlus size={16} /> Título Principal
          </button>
          <button
            onClick={handleInsertSubtitle}
            disabled={!selectedRow}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${!selectedRow ? 'text-gray-400 cursor-not-allowed' : 'text-purple-600 hover:bg-purple-50 border border-purple-200'}`}
          >
            <FileText size={16} /> Subtítulo
          </button>
          <button
            onClick={handleInsertPartida}
            disabled={!selectedRow}
            className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 ${!selectedRow ? 'text-gray-400 cursor-not-allowed' : 'text-orange-600 hover:bg-orange-50 border border-orange-200'}`}
          >
            <List size={16} /> Partida
          </button>
          
          <div className="border-t border-gray-300 pt-2 mt-4">
            <h4 className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Vista</h4>
            <button
              onClick={expandAll}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-teal-600 hover:bg-teal-50 border border-teal-200 mb-1"
            >
              <Plus size={16} /> Expandir Todo
            </button>
            <button
              onClick={collapseAll}
              className="w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-red-600 hover:bg-red-50 border border-red-200"
            >
              <Minus size={16} /> Colapsar Todo
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 flex-1">
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {selectedProyectoId !== null ? (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">
                    Presupuesto - {getProyectoNombre(selectedProyectoId)}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Gestión de partidas jerárquicas del proyecto
                  </p>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">&nbsp;</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Partida</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Descripción</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold">Unidad</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">Metrado</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">Precio [S/.]</th>
                        <th className="px-4 py-3 text-right text-sm font-semibold">Parcial</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {getItemsProyecto(selectedProyectoId).length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                            No hay partidas disponibles para este proyecto.
                            <div className="mt-2">
                              <button
                                onClick={handleInsertTitle}
                                className="text-blue-600 hover:text-blue-800 underline"
                              >
                                Agregar primera partida
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        getItemsProyecto(selectedProyectoId).map((item) => 
                          renderItem(item)
                        ).flat()
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center text-gray-500">
                <h3 className="text-lg font-medium mb-2">No se ha seleccionado ningún proyecto</h3>
                <p>Selecciona un proyecto para gestionar sus partidas.</p>
              </div>
            )}
          </div>

          {/* Modal for insert/edit */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800">
                    {modalType === 'insert_title' ? "Insertar Título Principal" : 
                     modalType === 'insert_subtitle' ? "Insertar Subtítulo" : 
                     modalType === 'insert_partida' ? "Insertar Partida" : "Editar"}
                  </h2>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descripción de la Partida *
                    </label>
                    <textarea
                      value={formData.partida}
                      onChange={(e) => setFormData((prev) => ({ ...prev, partida: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                      rows={3}
                      placeholder="Ingrese la descripción de la partida"
                      required
                    />
                  </div>
                  
                  {isPartidaMode && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Unidad *
                        </label>
                        <input
                          type="text"
                          value={formData.unidad || ''}
                          onChange={(e) => setFormData((prev) => ({ ...prev, unidad: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                          placeholder="ej. M3, M2, KG"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Metrado *
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={formData.metrado || ''}
                          onChange={(e) => setFormData((prev) => ({ ...prev, metrado: parseFloat(e.target.value) || 0 }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                          placeholder="0.00"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Precio (S/.) *
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={formData.precio || ''}
                          onChange={(e) => setFormData((prev) => ({ ...prev, precio: parseFloat(e.target.value) || 0 }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>
                  )}
                  
                  {isPartidaMode && formData.metrado && formData.precio && (
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <div className="text-sm text-gray-600">
                        <strong>Parcial calculado:</strong> S/. {(formData.metrado * formData.precio).toFixed(2)}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleModalSubmit}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
                    >
                      <Save size={16} />
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Subproject;