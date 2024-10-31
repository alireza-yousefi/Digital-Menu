<template>
    <div style="
        background-image: url('/grass.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      ">
        <canvas id="canvas" width="400" height="600"
            style="border: 1px solid #ccc; max-width: 100%; height: auto;"></canvas>
    </div>
</template>

<script setup lang="ts">
import * as fabric  from 'fabric/node';

interface Table {
    type: string;
    isReserved: boolean;
    top: number;
    left: number;
    id: string;
}

const canvas = ref<fabric.Canvas | null>(null);

const tables: Table[] = ([
    { type: '2 نفره', isReserved: false, top: 0, left: 10, id: 'table1' },
    { type: '2 نفره', isReserved: true, top: 160, left: 10, id: 'table2' },
    { type: '3 نفره', isReserved: true, top: 320, left: 10, id: 'table3' },
    { type: '4 نفره', isReserved: false, top: 110, left: 300, id: 'table4' },
    { type: '6 نفره', isReserved: false, top: 220, left: 280, id: 'table5' },
    { type: '4 نفره', isReserved: true, top: 370, left: 300, id: 'table6' },
    { type: '4 نفره', isReserved: false, top: 470, left: 240, id: 'table7' },
]);

const selectedTables: string[] = ([]);

const createFabric = () => {
    // اطمینان از اینکه fabric بارگذاری شده است
    if (!fabric) {
        throw new Error('Fabric.js failed to load');
    }

    canvas.value = new fabric.Canvas('canvas', {
        width: 400,
        height: 600,
    });
       
    ready()
}

const addTable =(table: Table) => {
            let imageUrl: string;
            switch (table.type) {
                case '2 نفره':
                case '3 نفره':
                    imageUrl = '/img/tableshadow.png';
                    break;
                case '4 نفره':
                    imageUrl = '/img/table-6.png';
                    break;
                case '6 نفره':
                    imageUrl = '/img/sofa.png';
                    break;
                default:
                    console.warn(`Table type ${table.type} is not recognized!`);
                    return;
            }

            fabric.Image.fromURL(imageUrl, (img: fabric.Image) => {
                const [desiredWidth, desiredHeight] =
                    table.type === '2 نفره' || table.type === '3 نفره'
                        ? [95, 95]
                        : table.type === '4 نفره'
                            ? [102, 102]
                            : [140, 140];

                img.scaleToWidth(desiredWidth);
                img.set({
                    top: (desiredHeight - img.getScaledHeight()!) / 2 + table.top,
                    left: (desiredWidth - img.getScaledWidth()!) / 2 + table.left,
                    id: table.id,
                    opacity: table.isReserved ? 0.5 : 1,
                    selectable: true,
                    hasControls: false,
                    hasBorders: false,
                    lockMovementX: true,
                    lockMovementY: true,
                    lockRotation: true,
                    lockScalingX: true,
                    lockScalingY: true,
                    hoverCursor: 'pointer',
                });

                img.on('mousedown', () => {
                    if (!table.isReserved) {
                        const isSelected = selectedTables.includes(img.id!);
                        let newImageUrl = isSelected
                            ? imageUrl
                            : table.type === '2 نفره'
                                ? '/img/table-4-red.png'
                                : table.type === '4 نفره'
                                    ? '/img/table-6-red.png'
                                    : '/img/table-8-red.png';

                        fabric.Image.fromURL(newImageUrl, (newImg: fabric.Image) => {
                            newImg.set({
                                top: img.top,
                                left: img.left,
                                scaleX: img.scaleX,
                                scaleY: img.scaleY,
                                selectable: img.selectable,
                                hasControls: img.hasControls,
                                hasBorders: img.hasBorders,
                                lockMovementX: img.lockMovementX,
                                lockMovementY: img.lockMovementY,
                                lockRotation: img.lockRotation,
                                lockScalingX: img.lockScalingX,
                                lockScalingY: img.lockScalingY,
                            });
                            canvas.value.remove(img).insertAt(newImg, canvas.value.getObjects().indexOf(img));
                            canvas.value.renderAll();
                        });

                        isSelected
                            ? selectedTables.splice(selectedTables.indexOf(img.id!), 1)
                            : selectedTables.push(img.id!);
                        console.log(selectedTables);
                    }
                });

                canvas.value.add(img);
            });
        }

        const loadImage = (url: string, top: number, left: number, width: number, height: number) => {
            fabric.Image.fromURL(url, (img: fabric.Image) => {
                img.set({ top, left, selectable: false }).scaleToWidth(width).scaleToHeight(height);
                canvas.value.add(img);
            });
        }

const ready = () => {
    tables.forEach((table) => addTable(table));
    
    loadImage('/img/bar.png', 330, -5, 600, 340);
        loadImage('/img/door.png', -82, 270, 300, 220);
        loadImage('/img/pool.png', 80, 4, 130, 380);

        canvas.value.selection = false;
}


onMounted(async () => {
    createFabric();
});
</script>

<style scoped>
canvas {
    border: 1px solid #ccc;
    max-width: 100%;
    height: auto;
}
</style>